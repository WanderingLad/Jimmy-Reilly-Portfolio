import React from 'react';

export default function Contact() {
    return (
        <div>
            <div className="blank-space"></div>
            <div className="flex-container space-around">
                <div className="mt-5"><form>
                    <div class="form-group">
                        <label for="InputEmail">Email address</label>
                        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="InputName">Name</label>
                        <input type="text" class="form-control" id="InputName" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="MessageArea">Message</label>
                        <textarea class="form-control" id="MessageArea" rows="10"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
                <div className="mt-5">
                    <h2>Let's chat.</h2>
                    <h3>Tell me about your project, and let's create something great together!</h3>
                    <p>Email me at <span><a href="mailto:zhangxuyang.chn@gmail.com">ZhangXuyang.chn@gmail.com</a></span></p>

                </div>
            </div>
        </div>
    );
}