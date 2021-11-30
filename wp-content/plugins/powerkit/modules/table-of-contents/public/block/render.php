<?php
/**
 * TOC block template
 *
 * @var        $attributes - block attributes
 * @var        $options - layout options
 *
 * @link       https://codesupply.co
 * @since      1.0.0
 *
 * @package    PowerKit
 * @subpackage PowerKit/templates
 */

$params = array(
    'title'          => $attributes['title'],
    'depth'          => $attributes['depth'],
    'min_count'      => $attributes['minCount'],
	'min_characters' => $attributes['minCharacters'],
	'btn_hide'       => $attributes['btnHide'],
);
?>

<div class="<?php echo esc_attr( $attributes[ 'className' ] ); ?>" <?php echo ( isset( $attributes[ 'anchor' ] ) ? ' id="' . esc_attr( $attributes[ 'anchor' ] ) . '"' : '' ); ?>>
    <?php
    global $powerkit_toc_parse;

    if ( ! $powerkit_toc_parse ) {
        // TOC output.
        powerkit_toc_list( $params );
    }
    ?>
</div>
