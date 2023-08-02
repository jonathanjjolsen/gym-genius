import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });

  // const matchupList = data?.matchups || [];

  //   return (
  //     <div className="card bg-white card-rounded w-50">
  //       <div className="card-header bg-dark text-center">
  //         <h1>Welcome to Gym Genius!</h1>
  //       </div>
  //       <div className="card-body m-5">
  //         <h2>Here is a list of matchups you can vote on:</h2>
  //         {loading ? (
  //           <div>Loading...</div>
  //         ) : (
  //           <ul className="square">
  //             {matchupList.map((workout) => {
  //               return (
  //                 <li key={workout._id}>
  //                   <Link to={{ pathname: `/workout/${workout._id}` }}>
  //                     Test
  //                   </Link>
  //                 </li>
  //               );
  //             })}
  //           </ul>
  //         )}
  //       </div>
  //       <div className="card-footer text-center m-3">
  //         <h2>Ready to create your own profile?</h2>
  //         {/* Need to create this section */}
  //         <Link to="/createprofile">
  //           <button className="btn btn-lg btn-danger">Create Profile!</button>
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // };


  return (
    <div>
      <h1>Hello Home!</h1>
    </div>
  )
}

export default Home;
