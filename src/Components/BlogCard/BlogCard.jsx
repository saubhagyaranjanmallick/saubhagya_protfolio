import React from 'react'


const BlogCard = () => {
  return (
    <div>
       <Box
      sx={{
        bgcolor: '#009688',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton
        sx={{ bgcolor: '#9E9E9E' }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
    </div>
  )
}

export default BlogCard
