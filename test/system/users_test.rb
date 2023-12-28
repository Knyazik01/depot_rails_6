require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase
  setup do
    @user = users(:one)
  end

  test "visiting the index" do
    visit users_url
    assert_selector "h1", text: "Users"
  end

  test "creating a User" do
    visit users_url
    click_on "New User"

    fill_in "Name", with: 'new_user'
    fill_in "Password", with: 'secret'
    fill_in "Confirm", with: 'secret'
    click_on "Create User"

    assert_text "User new_user was successfully created"
  end

  test "updating a User" do
    visit users_url
    click_on "Edit", match: :first

    fill_in "Name", with: @user.name
    fill_in "Password", with: 'secret'
    fill_in "Confirm", with: 'secret'
    click_on "Update User"

    assert_text "User #{@user.name} was successfully updated"
  end

  test "destroying a User" do
    visit users_url

    # we delete second item, as we login as first user
    user_to_destroy = users(:two)
    user_row = page.find('tr', text: user_to_destroy.name)

    page.accept_confirm do
      user_row.click_on "Destroy"
    end

    assert_text "User was successfully destroyed"
  end
end