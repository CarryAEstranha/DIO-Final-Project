import { Products } from "../Data/Products";

export const CountCategory = () => {
    const categoryReduced = {};

    const category = Products.map((item) => {
        return item.category;
    });

    category.forEach((item) => {
        categoryReduced[item] = (categoryReduced[item] || 0) + 1;
    });

    return Object.entries(categoryReduced);

    // console.log(Object.entries(categoryReduced))

    // return Object.entries(categoryReduced).map((item) => {
    //     return {
    //         [item[0]]: item
    //     }
    // });
}