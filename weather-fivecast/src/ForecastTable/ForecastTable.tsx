import React from 'react';
import HourlyTable from './HourlyTable/HourlyTable';
import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';
// const HourlyTable = React.lazy(() => import('./HourlyTable/HourlyTable'));

const ForecastTable = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="ForecastTable">
      {/* <MUI.TableContainer component={MUI.Paper}>
        <MUI.Table aria-label="collapsible table">
          <MUI.TableHead>
            <MUI.TableRow>
              <MUI.TableCell />
              <MUI.TableCell>Dessert (100g serving)</MUI.TableCell>
              <MUI.TableCell align="right">Calories</MUI.TableCell>
              <MUI.TableCell align="right">Fat&nbsp;(g)</MUI.TableCell>
              <MUI.TableCell align="right">Carbs&nbsp;(g)</MUI.TableCell>
              <MUI.TableCell align="right">Protein&nbsp;(g)</MUI.TableCell>
            </MUI.TableRow>
          </MUI.TableHead>
          <MUI.TableBody>
            {[1, 2].map((row) => (
              <React.Fragment>
                <MUI.TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                  <MUI.TableCell>
                    <MUI.IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <IconsMUI.KeyboardArrowUpIcon /> : <IconsMUI.KeyboardArrowDownIcon />}
                    </MUI.IconButton>
                  </MUI.TableCell>
                  <MUI.TableCell component="th" scope="row">
                    {row.name}
                  </MUI.TableCell>
                  <MUI.TableCell align="right">{row.calories}</MUI.TableCell>
                  <MUI.TableCell align="right">{row.fat}</MUI.TableCell>
                  <MUI.TableCell align="right">{row.carbs}</MUI.TableCell>
                  <MUI.TableCell align="right">{row.protein}</MUI.TableCell>
                </MUI.TableRow>
                <MUI.TableRow>
                  <MUI.TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <MUI.Collapse in={open} timeout="auto" unmountOnExit>
                      <MUI.Box sx={{ margin: 1 }}>
                        <MUI.Typography variant="h6" gutterBottom component="div">
                          History
                        </MUI.Typography>
                        <MUI.Table size="small" aria-label="purchases">
                          <MUI.TableHead>
                            <MUI.TableRow>
                              <MUI.TableCell>Date</MUI.TableCell>
                              <MUI.TableCell>Customer</MUI.TableCell>
                              <MUI.TableCell align="right">Amount</MUI.TableCell>
                              <MUI.TableCell align="right">Total price ($)</MUI.TableCell>
                            </MUI.TableRow>
                          </MUI.TableHead>
                          <MUI.TableBody>
                            {row.history.map((historyRow: any) => (
                              <MUI.TableRow key={historyRow.date}>
                                <MUI.TableCell component="th" scope="row">
                                  {historyRow.date}
                                </MUI.TableCell>
                                <MUI.TableCell>{historyRow.customerId}</MUI.TableCell>
                                <MUI.TableCell align="right">{historyRow.amount}</MUI.TableCell>
                                <MUI.TableCell align="right">
                                  {Math.round(historyRow.amount * row.price * 100) / 100}
                                </MUI.TableCell>
                              </MUI.TableRow>
                            ))}
                          </MUI.TableBody>
                        </MUI.Table>
                      </MUI.Box>
                    </MUI.Collapse>
                  </MUI.TableCell>
                </MUI.TableRow>
              </React.Fragment>
            ))}
          </MUI.TableBody>
        </MUI.Table>
      </MUI.TableContainer> */}
    </div>
  );
}

export default ForecastTable;
