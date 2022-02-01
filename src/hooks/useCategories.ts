import { useEffect, useState } from 'react';

import { ICategory } from '../models/ICategory';
import categoryService from '../graphql/services/categoryService';

const useCategories = () => {

    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchCategories = async () => {
        setLoading(true);
        const res = await categoryService.getAllCategories();
        setCategories(res.data.categories);
        setLoading(false);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { loading, categories, refetchCategories: fetchCategories };
};

export default useCategories;
