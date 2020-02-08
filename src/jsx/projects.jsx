import { descriptions } from './descriptions.js';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageExpanded: false
        };
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand() {
        this.setState((state) => { return { pageExpanded: !state.pageExpanded } });
    }

    renderProjects() {
        const {
            projects,
        } = this.props;
        const {
            pageExpanded,
        } = this.state;

        let renderedProjects = [];
        for (const [section, info] of Object.entries(projects)) {
            if (!pageExpanded) {
                renderedProjects.push(
                    <hr key={section+' line break'} width='20%' />,
                    <h2 key={section}>{section}</h2>
                );
            }
            for (const [caption, src] of Object.entries(info.projects)) {
                renderedProjects.push(
                    <Project
                        key={caption}
                        src={'images/'+src}
                        caption={caption}
                        height={info.height}
                        pageExpanded={pageExpanded}
                        toggleExpand={this.toggleExpand}
                    />
                );
            }
        }
        if (!pageExpanded)
            renderedProjects.shift();
        return renderedProjects;
    }

    render() {
        return <div>{this.renderProjects()}</div>;
    }
}

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    renderNormal() {
        const {
            src,
            caption,
            height,
            toggleExpand,
        } = this.props;

        return (
            <figure>
                <input type='image' src={src} alt={caption} height={height}
                        onClick={() => {
                            this.setState({ expanded: true }, () => toggleExpand());
                        }}
                />
                <figcaption>{caption}</figcaption>
            </figure>
        );
    }

    renderExpanded() {
        const {
            src,
            caption,
            height,
            toggleExpand,
        } = this.props;

        const imgStyle = caption == 'APV-MCTS for a newly released TCG' ?
            { 'width': '90%' } : { 'height': height };
        return (
            <div style={{
                position: 'relative',
                margin: 'auto',
                height: '100vh',
                width: '61.8%',
                background: 'rgba(0, 0, 0, 0.05)',
                paddingTop: '10px',
            }}>
                <h2>{caption}</h2>
                <a href='#' className='close' style={{ top: '5px', right: '5px', }} onClick={
                    () => {
                        this.setState({ expanded: false }, () => toggleExpand());
                    }
                }/>
                <img src={src} alt={caption} style={imgStyle} />
                {descriptions[caption]}
            </div>
        );
    }

    render() {
        const {
            expanded,
        } = this.state;
        const {
            pageExpanded,
        } = this.props;

        if (pageExpanded) {
            if (!expanded) return null;
            return this.renderExpanded();
        } else {
            return this.renderNormal();
        }
    }
}

const projects = {
    'EECS': {
        'projects': {
            'Mobile Audio System': 'electronics.jpg',
            'Quadcopter Control': 'image50.jpg',
            'Embedded Tetris': 'tetris_diagram.png',
        },
        'height': '280px',
    },
    'Applied Maths': {
        'projects': {
            'Ordinary Differential Equations': 'ODEs.jpg',
            'Golden Section Search': 'gss.jpg',
            'Three Body Problem': '3bp.jpg',
            'Public-Key Cryptography': 'crypt.jpg',
        },
        'height': '200px',
    },
    'CV/ML/AI': {
        'projects': {
            'CFU Tracker for Water Testing': 'waterscope-improc.png',
            'APV-MCTS for a newly released TCG': 'apv-mcts.png',
        },
        'height': '300px',
    },
};

ReactDOM.render(<Projects projects={projects} />, $('#projects')[0]);
