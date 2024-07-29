import AuthComponent from "../../lib/authComponent";
import { AdminStyle } from "./style.admin"
import AdminPage from "../Sidebar/Sidebar"

const AdminLayout = () => (
    <AuthComponent role="admin">
        <AdminStyle>
            <AdminPage />
        </AdminStyle>
    </AuthComponent>
)
export default AdminLayout