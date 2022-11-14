import React from 'react'

function BasicCard(props) {
  return <>
  <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left-${props.data.cardBorder} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Earnings (Monthly)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">${props.data.value}</div>
                    </div>
                    <div className="col-auto">
                        <i className={`fas ${props.data.icon}  fa-2x text-gray-300`}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export function ProgressCard({value=100,icon='fa-comments',cardBorder='danger'}){
    return <>
     <div className="col-xl-3 col-md-6 mb-4">
                  <div className={`card border-left-${cardBorder} shadow h-100 py-2`}>
                      <div className="card-body">
                          <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                  </div>
                                  <div className="row no-gutters align-items-center">
                                      <div className="col-auto">
                                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{value}%</div>
                                      </div>
                                      <div className="col">
                                          <div className="progress progress-sm mr-2">
                                              <div className="progress-bar bg-info" role="progressbar"
                                              style={{width:`${value}%`, ariaValuenow:`${value}`,
                                                ariaValueMin:"0", ariaValueMax:"100"
                                            }}></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-auto">
                              <i className={`fas ${icon}  fa-2x text-gray-300`}></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
    </>
}
export default BasicCard