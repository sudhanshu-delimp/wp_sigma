<?php
define( 'WP_CACHE', false /* Modified by NitroPack */ );

define('DISABLE_WP_CRON', true);


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

 define('WP_MEMORY_LIMIT','512M');
 define('WP_MAX_MEMORY_LIMIT','1024M' );

define( 'WP_AUTO_UPDATE_CORE', false );
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

//----------------------- Same machine DB configration ----------
/*define('DB_NAME','albila7_news');
define('DB_USER','albila');
define('DB_PASSWORD','alBiLa231^!');
define('DB_HOST', 'localhost');
 */

// ---------------------------AWS RDS -------------------------
define('DB_NAME','wp_sigma');
define('DB_USER','root');
define('DB_PASSWORD','');
define('DB_HOST', 'localhost');



define('DB_CHARSET', 'utf8mb4');
/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'q2dmA2)*eL`FKFs;!,^)&2:*7@<=}P/35oHqn9zK7t~4Jew3:K9NAQ7s8(hD.+C3');
define('SECURE_AUTH_KEY',  'ujVVpev48u~m*ZG&oS#:I4Cj>`4IiW?ZhyA6]ZHH%k5ehhz))V3^DKc5p,:qN3pF');
define('LOGGED_IN_KEY',    '/kt0~8y0]UDN[+dh`-p)@v*8xlHxeD7(`]?58ie+TYpX2&W[<B*Kre}1YImF&49]');
define('NONCE_KEY',        'n)zrYDbKP[0Y%TS91(q.X-{rLTr</1IT|P1LzS:M*r|L7cOU]d_nJoa|@,Zq8s$N');
define('AUTH_SALT',        '[S+[Fa&ON1_.c3 5%G+$|m!3Pvy~jP{TP.^Kn@s~J1O/ixFG1C?:Kn|)_dUZv@em');
define('SECURE_AUTH_SALT', ',nN^.cN~J{Ni9<uBz`,!R2i;avDFQS{n)F#>i:eaczpA-Px6vuLcGsHwF.5auaa?');
define('LOGGED_IN_SALT',   'oKGqdD6YYPD-4qRh&Mqmi(B#,|B2E54(<^|]IPkf;k x0Aeb4>JnPd.8m~y;{BJm');
define('NONCE_SALT',       ',J8}+ qk_vd7]D1f.:}-+)w:^$kb6kKh7V]B=ht>,~)o=xF^T8R1-]:dLLkb}[p1');
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
/* That's all, stop editing! Happy blogging. */
/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
