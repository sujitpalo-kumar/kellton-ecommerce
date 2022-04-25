import HomePage from "./pages/HomePage/homepage.component";
import {Route,Routes} from 'react-router-dom'
import ShopPage from "./pages/ShopPage/shoppage.component";
import SignInSignUp from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component";
import Header from "./components/header/header.component";

// ROUTE EXAMPLE IMPORTS
// import {Link,useNavigate,useParams} from 'react-router-dom'

function App() {
  return (
    
    <>
    <Header/>
    {/**Routes used to have multilple route options just
      like nav in html */}
      <Routes>
      {/** path represents the navigation path where it should
        redirect to */}
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInSignUp/>}/>

        {/** ROUTE EXAMPLES
        <Route path='/topiclist' element={<TopicList />} />
        // <Route path='/topiclist/:topicId' element={<TopicDetail />} />
        */}
      </Routes>
    </>
  );
}

// const HomePage = () => {
//   // useNavigate for event executions like button events or even input events
//   let navigate = useNavigate()
//   return (
//   <div>
//     <h1>This is Home Page</h1>
//     <Link to='/topiclist'>Topic List</Link>
//     <button onClick={() => navigate('/topiclist/19')} > Topic Details </button>
//   </div>
//   )
// }


// const TopicList = () => {
//   let email = "arjun@gmail.com"
//   return (
//   // Nested Routing
//   <div>
//     <h1>This is Topic List Page</h1>
//     <Link to={`/topiclist/${email}`}> To Profile Arjun </Link><br />
//     <Link to={`/topiclist/17`}> To Topic 17 </Link><br />
//     <Link to={`/topiclist/21`}> To Topic 21 </Link>
//   </div>
//   )
// }


// const TopicDetail = () => {
//   // useParams used to read the url parameters
//   let params = useParams()
//   console.log(params)
//   return (
//     <>
//       <h1>This is Topic Detail Page</h1>
//       <div>This is Topic Detail Page with Id: {params.topicId}</div>
//     </>
//   )
// }

export default App;
