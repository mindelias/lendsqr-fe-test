type MenuItemProps = {
    title: string;
    name?: string ;
    icon?: string;
    path?: string;  
    hasSubMenu?: boolean; 
    subMenu?: Array<MenuItemProps>;
    onClick?: (item:any, path: string) => void;
    active?: boolean;
}

type  MenuProps = {
     item: MenuItemProps;
     active?: boolean;
     setActivePath: (path: string) => void;
     activePath: string
}