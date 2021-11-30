<form action="<?php echo esc_url( site_url( 'wp-login.php?action=postpass', 'login_post' ) ); ?>" method="post">
<?php echo __( "To view this protected post, enter the password below:" ); ?>
<label for="<?php echo $label; ?>"><?php echo __( "Password:" ); ?></label>
<input name="post_password" id="<?php echo $label; ?>" type="password" size="20" maxlength="20" />
<input type="submit" name="Submit" value="<?php echo esc_attr__( "Submit" ); ?>" />
</form>
