import bardapi
import os
import sys

os.environ['_BARD_API_KEY']='Your_Key'

question = sys.argv[1] if len(sys.argv) > 1 else ''

input_text = question + "의 증상이 있어 어떤 병이 의심될까?"

response = bardapi.core.Bard().get_answer(input_text)