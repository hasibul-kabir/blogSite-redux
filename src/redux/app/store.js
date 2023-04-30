import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogsSlice';
import blogReducer from '../features/blog/blogSlice';
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice';
import sortReducer from '../features/sort/sortSlice';
import filterReducer from '../features/filter/filterSlice';
import updateReducer from '../features/update/updateSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    sortBy: sortReducer,
    filterBy: filterReducer,
    update: updateReducer
  },
});
