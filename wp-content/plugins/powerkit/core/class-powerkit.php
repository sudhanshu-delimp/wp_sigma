<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @package    Powerkit
 * @subpackage Core
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Powerkit' ) ) {
	/**
	 * Main Core Class
	 */
	class Powerkit {
		/**
		 * The plugin version number.
		 *
		 * @var string $data The plugin version number.
		 */
		public $version;

		/**
		 * The plugin data array.
		 *
		 * @var array $data The plugin data array.
		 */
		public $data = array();

		/**
		 * The plugin settings array.
		 *
		 * @var array $settings The plugin data array.
		 */
		public $settings = array();

		/**
		 * INIT (global theme queue)
		 */
		public function init() {

			if ( ! function_exists( 'get_plugin_data' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}

			// Get plugin data.
			$plugin_data = get_plugin_data( POWERKIT_PATH . '/powerkit.php' );

			// Vars.
			$this->version = $plugin_data['Version'];

			// Settings.
			$this->settings = array(
				'name'          => esc_html__( 'Powerkit', 'powerkit' ),
				'version'       => $plugin_data['Version'],
				'documentation' => $plugin_data['AuthorURI'] . '/documentation/powerkit',
			);

			// Constants.
			$this->define( 'POWERKIT', true );
			$this->define( 'POWERKIT_VERSION', $plugin_data['Version'] );

			// Include core.
			require_once POWERKIT_PATH . 'core/core-powerkit-api.php';
			require_once POWERKIT_PATH . 'core/core-powerkit-functions.php';
			require_once POWERKIT_PATH . 'core/core-powerkit-helpers.php';
			require_once POWERKIT_PATH . 'core/core-powerkit-post-meta.php';

			// Include core classes.
			require_once POWERKIT_PATH . 'core/class-powerkit-module.php';
			require_once POWERKIT_PATH . 'core/class-powerkit-module-admin.php';
			require_once POWERKIT_PATH . 'core/class-powerkit-module-public.php';
			require_once POWERKIT_PATH . 'core/class-powerkit-deprecated.php';

			// Include admin classes.
			require_once POWERKIT_PATH . 'admin/class-admin-powerkit-manager.php';

			// Include modules.
			powerkit_load_files( 'modules' );

			// Include extensions.
			powerkit_load_files( 'extensions' );

			// Actions.
			add_action( 'powerkit_plugin_activation', array( $this, 'activation' ) );
			add_action( 'plugins_loaded', array( $this, 'check_version' ) );
			add_action( 'amp_post_template_css', array( $this, 'amp_enqueue_styles' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ), 5 );
			add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ), 5 );
			add_action( 'after_setup_theme', array( $this, 'after_setup_theme' ) );
			add_action( 'wp_head', array( $this, 'wp_head' ), 5 );
		}

		/**
		 * This function will safely define a constant
		 *
		 * @param string $name  The name.
		 * @param mixed  $value The value.
		 */
		public function define( $name, $value = true ) {

			if ( ! defined( $name ) ) {
				define( $name, $value );
			}
		}

		/**
		 * Returns true if has setting.
		 *
		 * @param string $name The name.
		 */
		public function has_setting( $name ) {
			return isset( $this->settings[ $name ] );
		}

		/**
		 * Returns a setting.
		 *
		 * @param string $name The name.
		 */
		public function get_setting( $name ) {
			return isset( $this->settings[ $name ] ) ? $this->settings[ $name ] : null;
		}

		/**
		 * Updates a setting.
		 *
		 * @param string $name  The name.
		 * @param mixed  $value The value.
		 */
		public function update_setting( $name, $value ) {
			$this->settings[ $name ] = $value;
			return true;
		}

		/**
		 * Returns data.
		 *
		 * @param string $name The name.
		 */
		public function get_data( $name ) {
			return isset( $this->data[ $name ] ) ? $this->data[ $name ] : null;
		}

		/**
		 * Sets data.
		 *
		 * @param string $name  The name.
		 * @param mixed  $value The value.
		 */
		public function set_data( $name, $value ) {
			$this->data[ $name ] = $value;
		}

		/**
		 * Hook activation
		 */
		public function activation() {
			if ( get_option( 'powerkit_db_version' ) ) {
				return;
			}

			update_option( 'powerkit_db_version', powerkit_raw_setting( 'version' ), true );
		}

		/**
		 * Check current version
		 */
		public function check_version() {

			// Version Data.
			$new = powerkit_raw_setting( 'version' );

			// Get db version.
			$current = get_option( 'powerkit_db_version', $new );

			// If versions don't match.
			if ( ! empty( $current ) && ! empty( $new ) && $current !== $new ) {
				/**
				 * If different versions call a special hook.
				 *
				 * @param string $current Current version.
				 * @param string $new     New version.
				 */
				do_action( 'powerkit_plugin_upgrade', $current, $new );

				update_option( 'powerkit_db_version', $new );

			} elseif ( ! empty( $new ) && $current !== $new ) {

				update_option( 'powerkit_db_version', $new );
			}
		}

		/**
		 * AMP stylesheets.
		 *
		 * @since    1.0.0
		 */
		public function amp_enqueue_styles() {
			echo file_get_contents( POWERKIT_PATH . 'assets/css/amp.css' ); // XSS.
		}

		/**
		 * This function will register scripts and styles for admin dashboard.
		 *
		 * @param string $page Current page.
		 */
		public function admin_enqueue_scripts( $page ) {
			wp_enqueue_style( 'powerkit', POWERKIT_URL . 'assets/css/powerkit.css', array(), powerkit_get_setting( 'version' ) );
		}

		/**
		 * This function will register scripts and styles
		 */
		public function wp_enqueue_scripts() {
			// Scripts.
			if ( is_user_logged_in() ) {
				wp_enqueue_script( 'tippy', POWERKIT_URL . 'assets/js/tippy.all.min.js', array( 'jquery' ), powerkit_get_setting( 'version' ), true );
			}

			wp_enqueue_script( 'powerkit', POWERKIT_URL . 'assets/js/_scripts.js', array( 'jquery', 'tippy' ), powerkit_get_setting( 'version' ), true );

			// Styles.
			wp_enqueue_style( 'powerkit', powerkit_style( POWERKIT_URL . 'assets/css/powerkit.css' ), array(), powerkit_get_setting( 'version' ) );

			// Add RTL support.
			wp_style_add_data( 'powerkit', 'rtl', 'replace' );
		}

		/**
		 * Sets up theme defaults and registers support for various WordPress features.
		 */
		public function after_setup_theme() {
			// Register custom thumbnail sizes.
			add_image_size( 'pk-small', 80, 80, true );
			add_image_size( 'pk-thumbnail', 300, 225, true );

			// Add editor style.
			if ( is_rtl() ) {
				add_editor_style( powerkit_style( POWERKIT_URL . 'assets/css/powerkit-rtl.css' ) );
			} else {
				add_editor_style( powerkit_style( POWERKIT_URL . 'assets/css/powerkit.css' ) );
			}
		}

		/**
		 * Fire the wp_head action.
		 */
		public function wp_head() {
			?>
			<link rel="preload" href="<?php echo esc_url( POWERKIT_URL . 'assets/fonts/powerkit-icons.woff' ); ?>" as="font" type="font/woff" crossorigin>
			<?php
		}

	}

	/**
	 * The main function responsible for returning the one true powerkit Instance to functions everywhere.
	 * Use this function like you would a global variable, except without needing to declare the global.
	 *
	 * Example: <?php $powerkit = powerkit(); ?>
	 */
	function powerkit() {

		// Globals.
		global $powerkit_instance;

		// Init.
		if ( ! isset( $powerkit_instance ) ) {
			$powerkit_instance = new Powerkit();
			$powerkit_instance->init();
		}

		return $powerkit_instance;
	}

	// Initialize.
	powerkit();
}
