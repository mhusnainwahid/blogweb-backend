


export const imageUpload = async (req,res)=> {
  try {



    return res.status(201).json({
      imageUrl: req.file.path
    })

  } catch (error) {
    return res.status(500).json({
      message: "Image not upload",
      error: error.message
    })
  }
}

