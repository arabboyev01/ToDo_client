import AuthComponent from "../../lib/authComponent";
import { AdminStyle } from "./style.admin"
import AdminPage from "../Sidebar/Sidebar"
import { ReactNode } from "react";

interface AdminPageProps { children: ReactNode }

const AdminLayout = ({ children }: AdminPageProps) => (
    <AuthComponent role="admin">
        <AdminStyle>
            <AdminPage>
                {children}
            </AdminPage>
        </AdminStyle>
    </AuthComponent>
)
export default AdminLayout