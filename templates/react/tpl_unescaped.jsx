var React = require('react')

module.exports = React.createClass({
    render() {
        var {title, text, projects} = this.props
        return (
            <html>
                <head>
                    <title>{ title }</title>
                </head>
                <body>
                    <p>{text}</p>
                    {
                        projects.length
                        ? projects.map(function(project, index) {
                            return (
                                <div key={index}>
                                    <a href={ project.url }>{ project.name }</a>
                                    <p>{ project.description }</p>
                                </div>
                            )
                        })
                        : <div>No projects</div>
                    }
                </body>
            </html>
        )
    }
})
