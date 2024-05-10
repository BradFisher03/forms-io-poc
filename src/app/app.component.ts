import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormioAppConfig, FormioModule } from '@formio/angular';
import { AppConfig } from './forms-io.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormioModule],
  providers: [{ provide: FormioAppConfig, useValue: AppConfig }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  exampleFormUrl = {
    display: 'wizard',
    settings: {
      pdf: {
        id: '1ec0f8ee-6685-5d98-a847-26f67b67d6f0',
        src: 'https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0',
      },
    },
    components: [
      {
        title: 'Page 1',
        label: 'Page 1',
        type: 'panel',
        key: 'page1',
        components: [
          {
            label: 'my-details',
            tag: 'h5',
            attrs: [
              {
                attr: '',
                value: '',
              },
            ],
            content: 'My Details',
            refreshOnChange: false,
            key: 'myDetails',
            type: 'htmlelement',
            input: false,
            tableView: false,
          },
          {
            title: 'Account Type',
            collapsible: true,
            key: 'accountType',
            type: 'panel',
            label: 'Panel',
            input: false,
            tableView: false,
            components: [
              {
                label: 'HTML',
                attrs: [
                  {
                    attr: '',
                    value: '',
                  },
                ],
                content: 'Select the account you are completing the budget for',
                refreshOnChange: false,
                key: 'html',
                type: 'htmlelement',
                input: false,
                tableView: false,
              },
              {
                label: 'Radio',
                optionsLabelPosition: 'right',
                inline: false,
                hideLabel: true,
                tableView: false,
                values: [
                  {
                    label: 'Credit Card',
                    value: 'creditCard',
                    shortcut: '',
                  },
                  {
                    label: 'Mortgage',
                    value: 'mortgage',
                    shortcut: '',
                  },
                  {
                    label: 'Loan/Overdraft',
                    value: 'loanOverdraft',
                    shortcut: '',
                  },
                ],
                persistent: 'client-only',
                validate: {
                  onlyAvailableItems: true,
                },
                key: 'radio',
                type: 'radio',
                labelMargin: 3,
                input: true,
              },
              {
                label: 'First 6 digits of your credit card number:',
                applyMaskOn: 'change',
                tableView: true,
                key: 'first6DigitsOfYourCreditCardNumber',
                conditional: {
                  show: true,
                  when: 'radio',
                  eq: 'creditCard',
                },
                type: 'textfield',
                input: true,
              },
              {
                label: 'Mortgage Account Number',
                applyMaskOn: 'change',
                tableView: true,
                key: 'mortgageAccountNumber',
                conditional: {
                  show: true,
                  when: 'radio',
                  eq: 'mortgage',
                },
                type: 'textfield',
                input: true,
              },
              {
                label: 'Continue & Save',
                action: 'event',
                showValidations: false,
                tableView: false,
                key: 'continueSave',
                logic: [
                  {
                    name: 'openPersonalDetails',
                    trigger: {
                      type: 'event',
                      event: 'openPersonalDetails',
                    },
                    actions: [
                      {
                        name: 'openPersonalDetails',
                        type: 'customAction',
                        customAction:
                          "console.log(form);\nconsole.log(utils.getComponent(form.components, 'personalDetails'));",
                      },
                    ],
                  },
                ],
                type: 'button',
                event: 'openPersonalDetails',
                input: true,
              },
            ],
            collapsed: false,
          },
          {
            title: 'Personal Details',
            collapsible: true,
            key: 'personalDetails',
            type: 'panel',
            label: 'Panel',
            collapsed: true,
            input: false,
            tableView: false,
            components: [
              {
                label: 'fullName',
                attrs: [
                  {
                    attr: '',
                    value: '',
                  },
                ],
                content: 'Full Name',
                refreshOnChange: false,
                key: 'fullName',
                type: 'htmlelement',
                input: false,
                tableView: false,
              },
              {
                label: 'Title:',
                optionsLabelPosition: 'right',
                inline: false,
                tableView: false,
                values: [
                  {
                    label: 'Mr',
                    value: 'mr',
                    shortcut: '',
                  },
                  {
                    label: 'Miss',
                    value: 'miss',
                    shortcut: '',
                  },
                  {
                    label: 'Mrs',
                    value: 'mrs',
                    shortcut: '',
                  },
                  {
                    label: 'Ms',
                    value: 'ms',
                    shortcut: '',
                  },
                  {
                    label: 'Mx',
                    value: 'mx',
                    shortcut: '',
                  },
                  {
                    label: 'Master',
                    value: 'master',
                    shortcut: '',
                  },
                  {
                    label: 'Dr',
                    value: 'dr',
                    shortcut: '',
                  },
                ],
                key: 'title',
                type: 'radio',
                input: true,
              },
              {
                label: 'First Name',
                applyMaskOn: 'change',
                tableView: true,
                validate: {
                  required: true,
                  customMessage: 'Please enter a valid first name.',
                  minLength: 3,
                  maxLength: 20,
                },
                key: 'firstName',
                type: 'textfield',
                input: true,
              },
              {
                label: 'Last Name',
                applyMaskOn: 'change',
                tableView: true,
                validate: {
                  required: true,
                  customMessage: 'Please enter a valid last name.',
                  minLength: 3,
                  maxLength: 20,
                },
                key: 'lastName',
                type: 'textfield',
                input: true,
              },
              {
                label: 'horizontalLineBreak',
                tag: 'hr',
                attrs: [
                  {
                    attr: '',
                    value: '',
                  },
                ],
                refreshOnChange: false,
                key: 'html1',
                type: 'htmlelement',
                input: false,
                tableView: false,
              },
              {
                label: 'Date of Birth',
                displayInTimezone: 'utc',
                tableView: false,
                datePicker: {
                  disableWeekends: false,
                  disableWeekdays: false,
                },
                enableMinDateInput: false,
                enableMaxDateInput: false,
                key: 'dateOfBirth',
                type: 'datetime',
                input: true,
                widget: {
                  type: 'calendar',
                  displayInTimezone: 'utc',
                  locale: 'en',
                  useLocaleSettings: false,
                  allowInput: true,
                  mode: 'single',
                  enableTime: true,
                  noCalendar: false,
                  format: 'yyyy-MM-dd hh:mm a',
                  hourIncrement: 1,
                  minuteIncrement: 1,
                  time_24hr: false,
                  minDate: null,
                  disableWeekends: false,
                  disableWeekdays: false,
                  maxDate: null,
                },
              },
              {
                label: 'horizontalLine',
                tag: 'hr',
                attrs: [
                  {
                    attr: '',
                    value: '',
                  },
                ],
                refreshOnChange: false,
                key: 'horizontalLine',
                type: 'htmlelement',
                input: false,
                tableView: false,
              },
            ],
          },
        ],
        input: false,
        tableView: false,
      },
    ],
  };

  handleCustomEvent(event: any) {
    console.log(event);
  }
}
