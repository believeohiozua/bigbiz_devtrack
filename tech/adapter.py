from allauth.account.adapter import DefaultAccountAdapter


class ProjectAdapter(DefaultAccountAdapter):
    def save_user(self, request, user, form, commit=False):
        user = super().save_user(request, user, form, commit)
        data = form.cleaned_data
        user.project_name = data.get('project_name')
        user.contract_terms = data.get('contract_terms')
        user.report = data.get('report')
        user.progress_bar = data.get('progress_bar')
        user.link_to_content = data.get('link_to_content')
        user.Link_to_test_run = data.get('Link_to_test_run')
        user.Link_to_downlaod_project = data.get('Link_to_downlaod_project')
        user.total_amount = data.get('total_amount')
        user.part_payment_amount = data.get('part_payment_amount')
        user.balance_payment_amount = data.get('balance_payment_amount')
        user.total_amount_status = data.get('total_amount_status')
        user.part_payment_status = data.get('part_payment_status')
        user.balance_payment_status = data.get('balance_payment_status')
        user.project_status = data.get('project_status')
        user.terminate_contract = data.get('terminate_contract')
        user.created_at = data.get('created_at')
        user.save()
        return user
