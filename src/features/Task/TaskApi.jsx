import apiSlice from "../API/apiSlice";

const TaskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTask: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/tasks",
        headers: {
          "Content-Type": "application/json"
        },
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    getTasks: builder.query({
      query: () => ({
        url: "/tasks",
      }),
      providesTags: ["Tasks"],
    }),

    getTask: builder.query({
      query: (id) => ({
        url: `/tasks/${id}`,
      }),
      providesTags: ["Tasks"],
    }),

    updateTask: builder.mutation({
      query: ({ data, id }) => ({
        method: "PUT",
        url: `/tasks/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/tasks/${id}`,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useAddTaskMutation,
  useGetTasksQuery,
  useGetTaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = TaskApi;
