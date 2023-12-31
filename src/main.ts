
import { registerComponent, registerPartial } from './core/TemplateUtils';
import { registerRoutes } from './utils/navigationUtils';
import * as Components from './components';
import './styles/globalStyles.scss';
import { AppStore } from './core/AppStore';
import { AppState } from './types/core';
import { initStore } from './utils/storeUtils';

declare global {
  interface Window {
    store?: AppStore<AppState>;
  }
}

registerPartial(Components.FormContainer);

registerComponent(Components.Avatar.Name, Components.Avatar);
registerComponent(Components.Button.Name, Components.Button);
registerComponent(Components.GoBackButton.Name, Components.GoBackButton);
registerComponent(Components.GoForwardButton.Name, Components.GoForwardButton);
registerComponent(Components.GoToButton.Name, Components.GoToButton);
registerComponent(Components.StreachButtonLeft.Name, Components.StreachButtonLeft);
registerComponent(Components.InlineButton.Name, Components.InlineButton);
registerComponent(Components.ValidationMessage.Name, Components.ValidationMessage);
registerComponent(Components.InputBase.Name, Components.InputBase);
registerComponent(Components.Select.Name, Components.Select);
registerComponent(Components.InlineTextEditable.Name, Components.InlineTextEditable);
registerComponent(Components.Message.Name, Components.Message);
registerComponent(Components.TextField.Name, Components.TextField);
registerComponent(Components.SearchField.Name, Components.SearchField);
registerComponent(Components.Title.Name, Components.Title);
registerComponent(Components.Info.Name, Components.Info);
registerComponent(Components.AutorizationForm.Name, Components.AutorizationForm);
registerComponent(Components.RegistrationForm.Name, Components.RegistrationForm);
registerComponent(Components.ChangeProfileDataForm.Name, Components.ChangeProfileDataForm);
registerComponent(Components.ChangePasswordForm.Name, Components.ChangePasswordForm);
registerComponent(Components.AddChatForm.Name, Components.AddChatForm);
registerComponent(Components.AddUserForm.Name, Components.AddUserForm);
registerComponent(Components.DeleteUserForm.Name, Components.DeleteUserForm);
registerComponent(Components.Underlay.Name, Components.Underlay);
registerComponent(Components.AddChatDialog.Name, Components.AddChatDialog);
registerComponent(Components.AddUserDialog.Name, Components.AddUserDialog);
registerComponent(Components.DeleteUserDialog.Name, Components.DeleteUserDialog);
registerComponent(Components.ChatMenuDialog.Name, Components.ChatMenuDialog);
registerComponent(Components.FloatMessageDialog.Name, Components.FloatMessageDialog);
registerComponent(Components.ChatItem.Name, Components.ChatItem);
registerComponent(Components.ChatsList.Name, Components.ChatsList);
registerComponent(Components.FeedBody.Name, Components.FeedBody);
registerComponent(Components.FeedFooter.Name, Components.FeedFooter);
registerComponent(Components.ChatMenu.Name, Components.ChatMenu);
registerComponent(Components.FeedMessage.Name, Components.FeedMessage);
registerComponent(Components.Feed.Name, Components.Feed);

registerRoutes();

initStore();
