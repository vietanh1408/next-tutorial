import { HeaderProps } from '@/models/common';
import { AccountCircle } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, AppBar, Badge, Box, IconButton, InputBase, styled, Toolbar } from '@mui/material';
import React from 'react';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

const HeaderDesktop: React.FC<HeaderProps> = (props: HeaderProps) => {
	return (
		<Box component="header" textAlign="center" display={{ xs: 'none', md: 'block' }}>
			<AppBar position="static">
				<Toolbar>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
							onChange={(e) => console.log('e: ', e.target.value)}
						/>
					</Search>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton size="large" aria-label="show 17 new notifications" color="inherit">
							<Badge badgeContent={17} color="error">
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={'primary-search-account-menu'}
							aria-haspopup="true"
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default HeaderDesktop;
