<?php
/**
 * Plugin Name:       Schedule Builder Online
 * Description:       Easily embed schedules created with our free schedule maker to posts and pages.
 * Version:           1.0.1
 * Author:            Henrik Sandström
 * Author URI: 		  https://schedulebuilder.org
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */
 
/*
 * Plugin constants
 */
if(!defined('SCHEDULEBUILDERONLINE_URL'))
	define('SCHEDULEBUILDERONLINE_URL', plugin_dir_url( __FILE__ ));
 
/*
 * Main class
 */
class Schedulebuilderonline
{
 
    /**
     * Schedule Builder Online constructor.
     */
    public function __construct()
    {
		// Admin page calls
		add_action( 'admin_menu', array( $this, 'addAdminMenu' ) );
		add_action( 'wp_ajax_store_admin_data', array( $this, 'storeAdminData' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'addAdminScripts' ) );
		
		add_shortcode( 'sbo', array( $this, 'addSchedules' ) );
    }
	
	/*
	* Adds a plugin menu to the admin page.
	*/
	public function addAdminMenu()
	{
		add_menu_page(
		__( 'Schedule Builder Online', 'schedulebuilderonline' ),
		__( 'Schedule Builder Online', 'schedulebuilderonline' ),
		'manage_options',
		'schedulebuilderonline',
		array($this, 'adminLayout'),
		''
		 );
	}
	
	/**
	 * Outputs the Admin Dashboard layout containing the form with all its options
	 *
	 * @return void
	 */
	public function adminLayout()
	{
		
		$data = $this->getData(); 
		$language = $data['schedulebuilderonline_language'];
		$toggleOption = $data['schedulebuilderonline_size'];
		$scheduleURL = $data['schedulebuilderonline_link'];
		$visibility = $data['schedulebuilderonline_visibility'];
		
		//Language codes
		$langCodes = array( 
			"en" => "English", 
			"es" => "Español", 
			"sv" => "Svenska",
			"de" => "Deutsch",
			"pt" => "Português",
			"fr" => "Français",
			"it" => "Italiano",
			"ru" => "русский",
			"pl" => "Polski"
		);			 
		?>
	 
		<div class="wrap">
			<h3><?php _e('Schedule Builder Online Settings', 'schedulebuilderonline'); ?></h3>
	 
				<hr>
	 
				<form id="schedulebuilderonline-admin-form">
	 
					<table class="form-table">
						<tbody>
							<tr>
								<td scope="row">
									<label><?php _e( 'Language', 'schedulebuilderonline' ); ?></label>
								</td>
								<td>
									<select name="schedulebuilderonline_language"
											id="schedulebuilderonline_language"
											class="regular-text">
										<?php
										$langKeys = array_keys($langCodes);
										for($k = 0; $k < count($langCodes); $k++){
											if($langKeys[$k] == $language){
												echo "<option value='" . $langKeys[$k] . "' selected='selected'>" . $langCodes[$langKeys[$k]] . "</option>";
											} else {
												echo "<option value='" . $langKeys[$k] . "'>" . $langCodes[$langKeys[$k]] . "</option>";
											}
										}
										?>
									</select>
									<p class="description" id="tagline-description">Sets the language of the dates and the days of the week.</p>
								</td>
							</tr>
							<tr>
								<td scope="row">
									<label><?php _e( 'Size', 'schedulebuilderonline' ); ?></label>
								</td>
								<td>
									<select name="schedulebuilderonline_size"
											id="schedulebuilderonline_size"
											class="regular-text">
										<option value="sboFull" <?php if($toggleOption == "sboFull"){ echo "selected='selected'"; } ?>>Show entire schedule</option>
										<option value="sboToggled" <?php if($toggleOption == "sboToggled"){ echo "selected='selected'"; } ?>>Collapse/toggle schedule</option>
									</select>
									<p class="description" id="tagline-description">Sets the size of the schedule.</p>
								</td>
							</tr>
							<tr>
								<td scope="row">
									<label><?php _e( 'Link', 'schedulebuilderonline' ); ?></label>
								</td>
								<td>
									<select name="schedulebuilderonline_link"
											id="schedulebuilderonline_link"
											class="regular-text">
										<option value="showScheduleURL" <?php if($scheduleURL == "showScheduleURL"){ echo "selected='selected'"; } ?>>Show link</option>
										<option value="hideScheduleURL" <?php if($scheduleURL == "hideScheduleURL"){ echo "selected='selected'"; } ?>>Hide link</option>
									</select>
									<p class="description" id="tagline-description">Adds a link to a full size version of the embeded schedule.</p>
								</td>
							</tr>
							<tr>
								<td scope="row">
									<label><?php _e( 'Visibility', 'schedulebuilderonline' ); ?></label>
								</td>
								<td>
									<select name="schedulebuilderonline_visibility"
											id="schedulebuilderonline_visibility"
											class="regular-text">
										<option value="showOnHP" <?php if($visibility == "showOnHP"){ echo "selected='selected'"; } ?>>Don't hide schedules on any pages</option>
										<option value="hideFromHP" <?php if($visibility == "hideFromHP"){ echo "selected='selected'"; } ?>>Hide schedules on homepage, archives, category and tag pages</option>
									</select>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<button class="button button-primary" id="schedulebuilderonline-admin-save" type="submit"><?php _e( 'Save', 'schedulebuilderonline' ); ?></button>
								</td>
							</tr>
						</tbody>
					</table>
	 
				</form>
	 
		</div>
	 
	<?php
 
	}
	
	/**
	 * The option name
	 *
	 * @var string
	 */
	private $option_name = 'schedulebuilderonline_data';
	 
	/**
	 * Returns the saved options data as an array
	 *
	 * @return array
	 */
	private function getData() {
		return get_option($this->option_name, array());
	}
	
	/** 
	 * The security nonce 
	 *
	 * @var string 
	 */
	private $_nonce = 'schedulebuilderonline_admin';
	/**
	 * Adds Admin Scripts for the Ajax call
	 */
	public function addAdminScripts()
	{
		  wp_enqueue_script('schedulebuilderonline-admin', SCHEDULEBUILDERONLINE_URL. '/admin/js/admin.js', array(), 1.0);
		  $admin_options = array(
		 'ajax_url' => admin_url( 'admin-ajax.php' ),
		 '_nonce'   => wp_create_nonce( $this->_nonce ),
		  );
		  wp_localize_script('schedulebuilderonline-admin', 'schedulebuilderonline_exchanger', $admin_options);
	}
	
	/**
	 * Callback for the Ajax request
	 *
	 * Updates the options data
	 *
	 * @return void
	 */
	public function storeAdminData()
	{
	 
		if (wp_verify_nonce($_POST['security'], $this->_nonce ) === false)
		die('Invalid Request!');
	 
		$data = $this->getData();
		
		foreach ($_POST as $field=>$value) {
	 
			if (empty($value))
			continue;
		
			$data[$field] = $value;	 
		}
	 
		update_option($this->option_name, $data);
	 
		echo __('Saved!', 'schedulebuilderonline');
		die();
	 
	}
	
	/*
	* Replaces [sbo] shortcodes with schedule elements.
	*
	* Loads js and css files.
	*/
	public function addSchedules( $atts, $content = "" )
	{		
		if(strlen($atts["id"]) == 8){
			
			$data = $this->getData();
			$visibility = $data['schedulebuilderonline_visibility'];
			
			if( ($visibility != "hideOnHP" || is_single() || is_page()) ){
				
				wp_enqueue_script( 'schedulebuilderonline-jquery', 'https://code.jquery.com/jquery-3.3.1.min.js' );
				wp_enqueue_script( 'schedulebuilderonline-jquery-ui', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js' );
				wp_enqueue_script( 'schedulebuilderonline-moment', 'https://cdn.jsdelivr.net/npm/moment/min/moment.min.js' );
				wp_enqueue_script( 'schedulebuilderonline-main', SCHEDULEBUILDERONLINE_URL. '/public/js/main.min.js' );
				wp_enqueue_style( 'schedulebuilderonline-style', SCHEDULEBUILDERONLINE_URL. '/public/css/style.min.css' );
				
				$langLinks = array( 
					"en" => "Created with Free Schedule Builder Online", 
					"es" => "Creador gratuito de calendarios semanales", 
					"sv" => "Gratis schemaläggare online",
					"de" => "Kostenloser Online-Zeitplaner",
					"pt" => "Construtor de agendas online grátis",
					"fr" => "Créateur de calendrier en ligne gratuit",
					"it" => "Creatore di pianificazioni online gratuito",
					"ru" => "Бесплатный онлайн планировщик",
					"pl" => "Bezpłatny internetowy program do tworzenia harmonogramu"
				);
				
				$language = $data['schedulebuilderonline_language'];
				$toggleOption = $data['schedulebuilderonline_size'];
				$scheduleURL = $data['schedulebuilderonline_link'];
				
				if(empty($data)){
					$language = "en";
					$toggleOption = "scheduleFull";
					$scheduleURL = "showScheduleURL";
				}
				
				if($language == "en"){
					$scheduleLink = "https://schedulebuilder.org/?" . $atts['id'];
				} else {
					$scheduleLink = "https://$language.schedulebuilder.org/?" . $atts['id'];
				}
				
				$toggleDiv = "";
				if($toggleOption == "sboToggled"){
					$toggleDiv = "<div class='sboToggle'>Click to expand &#x25BC;</div>";
				}
				
				if($scheduleURL == "showScheduleURL"){
					$content .= "<div class='sboContainer'><div class='sboTemplate " . $atts['id'] . " $language $toggleOption'><a href='$scheduleLink' target='_blank' rel='noopener noreferrer' title='View schedule in full size' class='sboLink'>$langLinks[$language]</a>$toggleDiv</div></div>";
				} else {
					$content .= "<div class='sboContainer'><div class='sboTemplate " . $atts['id'] . " $language $toggleOption'>$toggleDiv</div></div>";
				}	
			} else {
				$content .= "<br><br>Click on post to view schedule";
			}	
		} else {
			//Invalid format
			$content = "";
		}	
		
		return $content;
	}
 
}
 
/*
 * Starts the plugin class.
 */
new Schedulebuilderonline();

?>