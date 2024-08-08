import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import {
    BASE_URL
} from "../../api/index";

const ENUMS = {
    products: "products",
    categoryId: "category_id"
};


export const productAPI = createApi({
    reducerPath: "api/productAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
            providesTags: ["Products"]
        }),
        getSingleProduct: builder.query({
            query: (id) => `${ENUMS.products}/${id}`
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `${ENUMS.products}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Products"]
        }),

        createProduct: builder.mutation({
            query: (product) => ({
                url: ENUMS.products,
                method: 'POST',
                body: {
                    ...product,
                    date_added: new Date().toISOString().split("T")[0]
                },
            }),
            invalidatesTags: ["Products"]
        }),

        partialUpdateProduct: builder.mutation({
            query: (product) => ({
                url: `${ENUMS.products}/${product.id}`,
                method: 'PATCH',
                body: product,
            }),
            invalidatesTags: ["Products"]
        }),

    })
})


export const {
    useGetAllProductsQuery,
    useGetSingleProductQuery,
    useDeleteProductMutation,
    useCreateProductMutation,
    usePartialUpdateProductMutation

} = productAPI