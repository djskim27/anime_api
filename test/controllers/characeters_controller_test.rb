require 'test_helper'

class CharacetersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get characeters_index_url
    assert_response :success
  end

  test "should get show" do
    get characeters_show_url
    assert_response :success
  end

  test "should get edit" do
    get characeters_edit_url
    assert_response :success
  end

end
