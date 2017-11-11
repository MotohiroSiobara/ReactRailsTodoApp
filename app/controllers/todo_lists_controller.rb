class TodoListsController < ApplicationController
  def index
    @state = { todoLists: [{ title: "サンプル", checked: false },{ title: "サンプル2", checked: false }] }
  end

  def create
    redirect_to root_path
  end
end
