class AttendancesController < ApplicationController
    def index
        attendance =  Attendance.all
        render json: attendance
    end
    def show
        attendance = Attendance.find_by(id: params[:id])
        render json: attendance, status: :ok
    end

end
