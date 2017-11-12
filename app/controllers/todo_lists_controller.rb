class TodoListsController < ApplicationController
  def index
    todolists = TodoList.all.to_a.map do |list|
      { id: list.id, title: list.title, checked: list.checked }
    end
    @state = { todoLists: todolists }
  end

  def create
    params["todo_lists"].each do |param|
      id_param = param["id"]
      title_param = param[:title]
      checked_param = param[:checked]
      if id_param.present?
        TodoList.find(id_param).update(title: title_param, checked: checked_param)
      else
        TodoList.create(title: title_param, checked: checked_param)
      end
    end
    redirect_to root_path
  end
end
