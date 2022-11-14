import React from 'react'
import BasicCard,{ProgressCard} from './Card'
// import Progresscard from './Progresscard'

function Dashboard(props) {
  return <div id="content-wrapper" className="d-flex flex-column">

  {/* <!-- Main Content --> */}
  <div id="content">

      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">

          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          <div className="row">
            <BasicCard data = {{value:props.data.earningsMonthly,icon:'fa-calendar',cardBorder:'primary'}}/>
            <BasicCard data = {{value:props.data.earningsAnnual,icon:'fa-calendar',cardBorder:'success'}}/>
            <ProgressCard value={props.data.taskCompletion} icon={'fa-clipboard-list'} cardBorder={'info'}/>
            <BasicCard data = {{value:props.data.pendingRequests,icon:'fa-comments',cardBorder:'warning'}}/>
          </div>


      </div>

  </div>

  {/* <!-- Footer --> */}
  <footer className="sticky-footer bg-white">
      <div className="container my-auto">
          <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
          </div>
      </div>
  </footer>
  {/* <!-- End of Footer --> */}

</div>
}

export default Dashboard