import { v4 as uuid } from 'uuid';

export const mapMainMenuItems = (menuItems) => {
    return menuItems.map((menuItem) => ({
        id: uuid(),
        destination: menuItem.menuItem.destination?.uri,
        label: menuItem.menuItem.label,
        subMenuLabel: (menuItem.items || []).map((subMenuItem) => ({
            id: uuid(),
            destination: subMenuItem.destination?.uri,
            label: subMenuItem.label,
        })),
        
    }));
};

// const mappedMenuItems = menuItems.map((menuItem) => {
//     const { destination, label } = menuItem;
//     const { uri } = destination;
//     return {
//         uri,
//         label,
//     };
// });
// return mappedMenuItems;