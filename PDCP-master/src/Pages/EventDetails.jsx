import React from 'react'
import { Footer } from '../components/footer';
import { PlanDescription} from '../components/PlanDescription';
import { Search } from '../components/Search';


const EventDetails = () => {
    return (
        <>
          <div>
            <Search />
            <PlanDescription />
            <Footer />
          </div>
        </>
      );
}

export default EventDetails


