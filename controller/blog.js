import Blogs from "../models/blog.js";

export const createBlog = async (req, res) => {
  try {
    const blog = await Blogs.create(req.body);
    return res.status(201).json({
      message: "Blog create succesfully!",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while creating blog!",
      error: error.message,
    });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blogs.find();
    return res.status(201).json(blog);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting Blogs!",
      error: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePro = await Blogs.findByIdAndDelete(id);
    return res.status(201).json({
      message: "Blogs deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while deleting Blogs",
      error: error.message,
    });
  }
};
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedata = req.body;
    const updatePro = await Blogs.findByIdAndUpdate(id, updatedata, {
      new: true,
    });
    return res.status(201).json({
      message: "Blogs update successfully",
      updatePro,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while updating Blogs",
      error: error.message,
    });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    return res.status(200).json({ blog });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting0 Blog",
      error: error.message,
    });
  }
};

export const getUserBlog = async (req, res) => {
  try {
    const { userId } = req.params;
    const blog = await Blogs.find({ userId });
    return res.status(200).json({ blog });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting Blog",
      error: error.message,
    });
  }
};

