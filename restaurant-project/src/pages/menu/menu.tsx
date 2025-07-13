import './menu.css';
import '../../App.css'
import { Grid } from '@mui/material';
import { menuSections } from './components/menuSections';

export type MenuSection = {
    title: string;
    items: { name: string; desc: string }[];
};

function highlightBrackets(name: string) {
    return name.replace(
        /[<>]/g,
        (match: string): string => `<span class="purple-bracket">${match}</span>`
    ).replace(
        /[{}]/g,
        (match: string): string => `<span class="purple-bracket">${match}</span>`
    );
}


const MenuSectionGrid = ({ section }: { section: MenuSection }) => (
    <>
        <div className="h3" style={{ marginBottom: '2.5%' }}>
            {section.title}
        </div>
        <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            width="80%"
            style={{ marginBottom: '2.5%' }}
        >
            {section.items.map((item, index) => (
                <Grid
                    key={index}
                    size={6}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    padding="0 3%"
                >
                    <div
                        className="h5consolas"
                        dangerouslySetInnerHTML={{ __html: highlightBrackets(item.name) }}
                    />
                    <div className="h6consolas">{item.desc}</div>
                </Grid>
            ))}
            {/* Add empty grid if odd number of items for alignment */}
            {section.items.length % 2 !== 0 && (
                <Grid
                    size={6}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    padding="0 3%"
                />
            )}
        </Grid>
    </>
);

const Menu = () => {  
    return (
        <div style={{ padding: '0 5% 0 5%' }}>
            <div className="menu-container">
                {menuSections.map((section, idx) => (
                    <MenuSectionGrid key={idx} section={section} />
                ))}
            </div>
        </div>
    );
}

export default Menu;
