var React = require('react')

module.exports = React.createClass({
    render() {
        var {title, text, projects} = this.props
        return (
            <html>
                <head>
                    <title dangerouslySetInnerHTML={{__html: title}}></title>
                </head>
                <body>
                    <p dangerouslySetInnerHTML={{__html: text}}></p>
                    {
                        projects.length
                        ? projects.map(function(project, index) {
                            return (
                                <div key={index}>
                                    <a href={ project.url } dangerouslySetInnerHTML={{__html: project.name}}></a>
                                    <p dangerouslySetInnerHTML={{__html: project.description}}></p>
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
