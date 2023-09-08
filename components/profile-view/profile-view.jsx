import { MainView } from "../main-view/main-view";
import { UserInfo } from "../user-info/user-info";

export const ProfileView () => {
    return (
        <UserInfo name={UserInfo.name} email={UserInfo.email} />
    )
};