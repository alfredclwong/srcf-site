class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    renderProjects() {
        let renderedProjects = [];
        for (const [section, info] of Object.entries(this.props.projects)) {
            if (!this.state.expanded) {
                projects.push(<br />, <br />, <hr width='15%' />, <h2>{section}</h2>);
            }
            for (const [caption, src] of Object.entries(info.projects)) {
                projects.push(
                    <Thumbnail src={'images/'+src} height={info.height} caption={caption} />
                );
            }
        }
        projects.shift(3);
    }

    render() {
        let projects = [];
        for (const [section, info] of Object.entries(this.props.projects)) {
            projects.push(<h2>{section}</h2>);
            for (const [caption, src] of Object.entries(info.projects)) {
                projects.push(
                    <Thumbnail src={'images/'+src} height={info.height} caption={caption} />
                );
            }
            projects.push(<br />, <br />, <hr width='15%' />);
        }
        projects.pop(3);
        return <div>{projects}</div>;
    }
}

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            invisible: false,
        };
    }

    render() {
        if (this.state.invisible)
            return;
        return (
            <figure>
                <input
                    type='image'
                    src={this.props.src}
                    alt={this.props.caption}
                    height={this.props.height}
                    onClick={() => {
                        this.setState((state) => {
                            return { expanded: !state.expanded }
                        });
                    }}
                />
                <figcaption>{this.props.caption}</figcaption>
            </figure>
        );
    }
}

const projects = {
    'Engineering': {
        'projects': {
            'Mobile Audio System': 'electronics.jpg',
            'Quadcopter Control': 'image50.jpg',
            'Tetris': 'tetris_diagram.png',
        },
        'height': '280px',
    },
    'Mathematics': {
        'projects': {
            'Ordinary Differential Equations': 'ODEs.jpg',
            'Golden Section Search': 'gss.jpg',
            'Three Body Problem': '3bp.jpg',
            'Public-Key Cryptography': 'crypt.jpg',
        },
        'height': '200px',
    },
    'Computer Science': {
        'projects': {
            'CFU Tracker for Water Testing': 'waterscope-improc.png',
            'APV-MCTS for a newly released TCG': 'apv-mcts.png',
        },
        'height': '300px',
    },
};

ReactDOM.render(<Projects projects={projects} />, $('#projects')[0]);
