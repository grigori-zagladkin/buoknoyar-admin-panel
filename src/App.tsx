import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import PrivateOutlet from "./utils/PrivateOutlet";
import CreateItemPage from "./pages/CreateItemPage";
import UpdateItemPage from "./pages/UpdateItemPage";
import DeleteItemPage from "./pages/DeleteItemPage";
import CreateServicePage from "./pages/CreateServicePage";
import UpdateServicePage from "./pages/UpdateServicePage";
import DeleteServicePage from "./pages/DeleteServicePage";
import CreateCategoryPage from "./pages/CreateCategoryPage";
import UpdateCategoryPage from "./pages/UpdateCategoryPage";
import DeleteCategoryPage from "./pages/DeleteCategoryPage";
import CreatePropertyPage from "./pages/CreatePropertyPage";
import UpdatePropertyPage from "./pages/UpdatePropertyPage";
import DeletePropertyPage from "./pages/DeletePropertyPage";

const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<PrivateOutlet />}>
                    <Route path="" element={<MainLayout />}>
                        <Route index element={<CreateItemPage />} />
                        <Route path="items/update" element={<UpdateItemPage />} />
                        <Route path="items/delete" element={<DeleteItemPage />} />
                        <Route path="services/create" element={<CreateServicePage />} />
                        <Route path="services/update" element={<UpdateServicePage />} />
                        <Route path="services/delete" element={<DeleteServicePage />} />
                        <Route path="categories/create" element={<CreateCategoryPage />} />
                        <Route path="categories/update" element={<UpdateCategoryPage />} />
                        <Route path="categories/delete" element={<DeleteCategoryPage />} />
                        <Route path="properties/create" element={<CreatePropertyPage />} />
                        <Route path="properties/update" element={<UpdatePropertyPage />} />
                        <Route path="properties/delete" element={<DeletePropertyPage />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
