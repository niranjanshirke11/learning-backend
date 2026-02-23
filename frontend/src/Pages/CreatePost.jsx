import React from 'react'

const CreatePost = () => {
    return (
        <>
            <div className='Create-page-heading'>Create a' Post</div>
            <section className='create-post'>
                <form>
                    <input type="file" placeholder='enter image' accept='image/*' name='image' />
                    <input type="text" placeholder='Caption' name='caption' />
                    <button type='submit'>Create Post</button>
                </form>
            </section>
        </>
    )
}

export default CreatePost