import {render, screen} from '@testing-library/react';
import App from './App';
import SortBy, {SHORTLISTS} from "./components/SortBy/SortBy";
import NavigationMain from "./components/NavigationMain/NavigationMain";
import MovieList, {movieLists} from "./components/MovieList/MovieList";
import MovieItem from "./components/MovieList/MovieItem/MovieItem";
import Logo from "./components/Logo/Logo";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import FindYourMovieForm from "./components/HeaderHome/FindYourMovieForm/FindYourMovieForm";
import Button from "./components/HeaderHome/FindYourMovieForm/Button/Button";


// const textExample = ['find your movie','movies found','sort by']
//     .map(el=>{
//
// test(`HomePage must contain phrase: ${el}`, () => {
//     const {getByText} = render(<App/>);
//     const linkElement = getByText(new RegExp(el,'i'));
//     expect(linkElement).toBeInTheDocument();
//     })
//
// })

describe("App", () => {
    it('renders App component', () => {
        render(<App/>);
        const textExample = ['find your movie', 'movies found', 'sort by', 'all']
        textExample.map(el => {
            expect(screen.getByText(new RegExp(el, 'i'))).toBeInTheDocument();
        })
    })
})

describe("SortBy", () => {
    it('renders SortBy component', () => {
        render(<SortBy/>);
        expect(screen.getByLabelText(/sort by/i)).toBeInTheDocument();
        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(screen.getByDisplayValue(SHORTLISTS[0])).toBeInTheDocument();
        // screen.getByRole('');
    })
})
describe("NavigationMain", () => {
    it('renders component NavigationMain ', () => {
        render(<NavigationMain/>);
        expect(screen.getByText(/all/i)).toBeInTheDocument();
        expect(screen.getByRole("list")).toBeInTheDocument();
        // expect(screen.getByDisplayValue(SHORTLISTS[0])).toBeInTheDocument();
        // screen.getByRole('');
    })
})

describe("MovieList", () => {
    it('renders component MovieList ', () => {
        render(<MovieList/>);
        expect(screen.getByText(/movies found/i)).toBeInTheDocument();
        screen.getByRole('heading');
    })
})

describe("MovieItem", () => {
    it('renders component MovieItem ', () => {
        const el = {}
        render(<MovieItem data={el}/>);
        // expect(screen.getByText(/bohemian/i)).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
        // expect(screen.getByDisplayValue(SHORTLISTS[0])).toBeInTheDocument();
        ;
    })
})
describe("Logo", () => {
    it('renders component  Logo', () => {
        render(<Logo/>);
        // expect(screen.getByText(/bohemssian/i)).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
        // expect(screen.getByDisplayValue(SHORTLISTS[0])).toBeInTheDocument();
        ;
    })
})
describe("FindYourMovieForm", () => {
    it('renders component  FindYourMovieForm', () => {
        render(<FindYourMovieForm />);
        // expect(screen.getByText(/bohemssian/i)).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        // expect(screen.getByDisplayValue(SHORTLISTS[0])).toBeInTheDocument();
        ;
    })
})
describe("Button", () => {
    it('renders component  Button', () => {
        render(<Button />);
        // expect(screen.getByText(/bohemssian/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        // expect(screen.getByDisplayValue(SHORTLISTS[0])).toBeInTheDocument();
        ;
    })
})
