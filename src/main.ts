
import { registerComponent, registerPartial } from './core/TemplateUtils';
import { PagesNames } from './constants/commonConstants';
import { navigate } from './utils/navigationUtils';
import * as Components from './components';
import './styles/globalStyles.scss';

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
registerComponent(Components.ChatItem.Name, Components.ChatItem);
registerComponent(Components.FeedBody.Name, Components.FeedBody);
registerComponent(Components.FeedFooter.Name, Components.FeedFooter);
registerComponent(Components.FeedHeader.Name, Components.FeedHeader);
registerComponent(Components.FeedMessage.Name, Components.FeedMessage);

navigate(PagesNames.Login);
