class TodoListsController < ApplicationController
  def index
    todolists = TodoList.all.to_a.map do |list|
      { id: list.id, title: list.title, checked: list.checked }
    end
    @state = { todoLists: todolists }
  end

  def create
    params["todo_lists"].each do |param|
      TodoList.create(title: param[:title], checked: param[:checked])
    end
    redirect_to root_path
  end
end
