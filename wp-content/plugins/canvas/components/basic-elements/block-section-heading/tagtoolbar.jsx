/**
 * WordPress dependencies
 */

const {
    __,
} = wp.i18n;

const {
	Component
} = wp.element;

const {
	Icon,
	Toolbar,
	DropdownMenu,
	Path, SVG
} = wp.components;

function HeadingLevelIcon( level ) {
	const levelToPath = {
		1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
		2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
		3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
		4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
		5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
		6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z',
	};

	if ( ! levelToPath.hasOwnProperty( level ) ) {
		return null;
	}

	return (
		<SVG width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
			<Path d={ levelToPath[ level ] } />
		</SVG>
	);
}

/**
 * Component
 */
export default class ExtendTagToolbar extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const DEFAULT_TAG_CONTROLS = [
			{
				icon: <Icon icon="editor-code" />,
				title: __( 'Default' ),
				type: 'default',
			},
			{
				icon: HeadingLevelIcon( 1 ),
				title: __( 'H1' ),
				type: 'h1',
			},
			{
				icon: HeadingLevelIcon( 2 ),
				title: __( 'H2' ),
				type: 'h2',
			},
			{
				icon: HeadingLevelIcon( 3 ),
				title: __( 'H3' ),
				type: 'h3',
			},
			{
				icon: HeadingLevelIcon( 4 ),
				title: __( 'H4' ),
				type: 'h4',
			},
			{
				icon: HeadingLevelIcon( 5 ),
				title: __( 'H5' ),
				type: 'h5',
			},
			{
				icon: HeadingLevelIcon( 6 ),
				title: __( 'H6' ),
				type: 'h6',
			},
			{
				icon: <Icon icon="minus" />,
				title: __( 'DIV' ),
				type: 'div',
			},
			{
				icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><Path d="M11 5v7H9.5C7.6 12 6 10.4 6 8.5S7.6 5 9.5 5H11m8-2H9.5C6.5 3 4 5.5 4 8.5S6.5 14 9.5 14H11v7h2V5h2v16h2V5h2V3z" /></SVG>,
				title: __( 'P' ),
				type: 'p',
			},
		];

		const {
			value,
			onChange,
			tagControls = DEFAULT_TAG_CONTROLS,
		} = this.props;

		function applyOrUnset( type ) {
			return () => onChange( value === type ? undefined : type );
		}

		const activeTag = tagControls.find( function( control ) {
			return ( value === control.type || ( 'default' === control.type && ( 'none' === value || 'default' === value || ! value ) ) );
		} );

		return (
			<Toolbar>
				<DropdownMenu
					icon={ activeTag ? activeTag.icon : <Icon icon="editor-code" /> }
					label={ activeTag ? activeTag.title : __( 'Change type tag' ) }
					controls={ tagControls.map( ( control ) => {
						const { type } = control;

						const isActive = ( value === type || ( 'default' === type && ( 'none' === value || 'default' === value || ! value ) ) );

						return {
							...control,
							isActive,
							onClick: applyOrUnset( type ),
						};
					} ) }
				/>
			</Toolbar>
		);
	}
}
