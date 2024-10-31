<?php
/**
 * Plugin uninstall routine.
 *
 * Removes all options and meta data added by the plugin.
 *
 * @package Schedule Builder Online
 */

defined( 'WP_UNINSTALL_PLUGIN' ) or die;

delete_option( 'schedulebuilderonline_data' );
?>