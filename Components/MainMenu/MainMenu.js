import { FaHouseUser, FaHeart } from "react-icons/fa";
import Link from 'next/link';

export const MainMenu = ( { items, callToActionLabel, callToActionDestination } ) => {
    console.log("MAIN MENU: ", items);
    // console.log("MAIN MENU: ", items[0].subMenuItems);
    return (
        <nav 
            className="
                bg-slate-800
                text-white 
                px-5 
                h-16 
                sticky 
                top-0 
                z-20
                flex"
        >
            <div 
                className="
                    py-4
                    pl-5
                    flex
                    text-pink-600
                "
                >
                    <FaHouseUser size={ 30 }/>
                    <FaHeart size={ 30 }/>
            </div>
            <div className="flex flex-1 justify-end">
                { (items || []).map(item => (
                    <div 
                    key={ item.id } 
                    className="
                        hover:bg-slate-700
                        cursor-pointer
                        relative
                        group
                        ">
                            <div>
                                <Link href={item.destination}
                                    className="
                                    flex
                                    items-center
                                    h-full
                                    px-5
                                    py-4
                                    "
                                >
                                    { item.label }
                                </Link>
                                
                            </div>

                            { !!item.subMenuItems?.length && (
                                <div 
                                    className="
                                        group-hover:block 
                                        hidden 
                                        absolute
                                        right-0
                                        text-right
                                        top-full
                                        -mt-3
                                        w-full
                                        bg-slate-800
                                        text-white
                                        
                                    ">
                                    {item.subMenuItems.map(subMenuItem => (
                                        <Link 
                                            key={ subMenuItem.id } 
                                            href={ subMenuItem.destination }
                                            className="
                                            block
                                            whitespace-nowrap
                                            p-5
                                            hover:bg-slate-700"    
                                        >
                                            { subMenuItem.label }
                                        </Link>
                                    ))}
                                    </div>
                            )}
                        </div>
                ))}
                <div className="ml-3 my-auto ">
                    <Link 
                        className="
                        bg-pink-500
                        hover:bg-pink-700
                        inline-block
                        my-2
                        px-4
                        py-2
                        uppercase
                        rounded-md
                        cursor-pointer
                        font-bold
                        text-white
                        "
                        href={ callToActionDestination }
                    >
                        { callToActionLabel }
                    </Link>
                </div>
            </div>
        </nav>
    );
};