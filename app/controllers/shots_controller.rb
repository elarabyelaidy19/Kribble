class ShotsController < ApplicationController
  before_action :set_shot, only: %i[ show edit update destroy ]

  # GET /shots or /shots.json
  def index
    @shots = Shot.all
  end

  # GET /shots/1 or /shots/1.json
  def show
  end

  # GET /shots/new
  def new
    @shot = Shot.new
  end

  # GET /shots/1/edit
  def edit
  end

  # POST /shots or /shots.json
  def create
    @shot = Shot.new(shot_params)

    respond_to do |format|
      if @shot.save
        format.html { redirect_to @shot, notice: "Shot was successfully created." }
        format.json { render :show, status: :created, location: @shot }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @shot.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shots/1 or /shots/1.json
  def update
    respond_to do |format|
      if @shot.update(shot_params)
        format.html { redirect_to @shot, notice: "Shot was successfully updated." }
        format.json { render :show, status: :ok, location: @shot }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @shot.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shots/1 or /shots/1.json
  def destroy
    @shot.destroy
    respond_to do |format|
      format.html { redirect_to shots_url, notice: "Shot was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shot
      @shot = Shot.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def shot_params
      params.require(:shot).permit(:title, :description, :user_id)
    end
end
