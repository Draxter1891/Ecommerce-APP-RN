export interface CategoryProp {
    _id: number;
    name: string;
    path: string;
    icon: string;
}


export const categoriesData = [
    {
        _id:1,
        name: 'Mobile',
        path: 'Mobile',
        icon: 'mobile1',
    },
    {
        _id:2,
        name: 'Laptop',
        path: 'Laptop',
        icon: 'laptop',
    },
    {
        _id:3,
        name: 'desktop',
        path: 'Desktop',
        icon: 'iconfontdesktop',
    },
    {
        _id:4,
        name: 'headphones',
        path: 'Headphones',
        icon: 'customerservice',
    },
    {
        _id:5,
        name: 'tablet',
        path: 'Tablet',
        icon: 'tablet1',
    },
    {
        _id:6,
        name: 'Accessories',
        path: 'Accessories',
        icon: 'appstore-o',
    },
]