import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Create() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <h5 className="pb-4">Register Subject</h5>

      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="admissionNumber">Addmission Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Addmission Number"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="first_name">First Name</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="middle_name">Middle Name</label>
            <input type="text" class="form-control" placeholder="Middle Name" />
          </div>
          <div class="form-group col-md-6">
            <label for="last_name">Last Name</label>
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Apartment, studio, or floor"
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="ethnicity">Ethnicity</label>
            <select id="ethnicity" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-4 ">
            <label for="present_class">Select Date</label>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div class="form-group col-md-4">
            <label for="stream">Stream</label>
            <select id="stream" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="disability">Disability</label>
            <select id="disability" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="present_class">Present Class</label>
            <select id="present_class" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="stream">Stream</label>
            <select id="stream" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="country">Country</label>
            <select id="country" class="form-control">
              <option selected>Choose Country...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="state">State</label>
            <select id="state" class="form-control">
              <option selected>Choose State...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="province">Province</label>
            <input
              type="text"
              class="form-control"
              id="province"
              placeholder="Province"
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary pull-right">
          Save Record
        </button>
      </form>
      {/* <form>
          <div class="form-row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
        </form> */}
    </div>
  );
}
