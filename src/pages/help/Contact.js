import React from 'react'

export const Contact = () => {
  return (
    <div className='contact'>
        <h3>Contact us</h3>
        <form>
            <label>
                <span>Your email:</span>
                <input type='email' name='email' required />            </label>
            <label />
            <label>
                <span>Your message:</span>
                <textarea name='message' required></textarea>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}
