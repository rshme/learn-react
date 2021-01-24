import { Component } from 'react';

class BlogLists extends Component{
    constructor() {
        super();
    }

    render(){
        return(
            <div className="container">
                <h2 className="text-3xl font-medium mb-3">
                   All Blogs
                </h2>
                <ul className="list-none">
                    {
                        this.props.lists.length > 0
                            ? this.props.lists.map(list => {
                                return(
                                    <li
                                        className="mb-5 py-3 px-5 hover:bg-red-400 cursor-pointer"
                                        onClick={() => {
                                            this.props.delete(list.id)
                                        }}
                                    >
                                        <h3 className="text-2xl font-base text-green-700 hover:text-white">
                                            { list.title }
                                        </h3>
                                        <p>{ list.body } </p>
                                    </li>
                                )
                            })
                            : ''
                    }
                </ul>
            </div>
        )
    }
}

export default BlogLists